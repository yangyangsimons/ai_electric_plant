const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const color = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const path = require("path");
dotenv.config({ path: "./config/config.env" });


const db = require("./config/db");
const app = express();
 

// cors
app.use(cors());
// body parser
app.use(express.json())

const port = process.env.PORT || 5001;
connectDB();

// dev logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


// cookie
app.use(cookieParser());

// Static middleware to serve the React build folder
app.use(express.static(path.join(__dirname, 'build')));
// route files
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");

const { required } = require("nodemon/lib/config");
const { cookie } = require("express/lib/response");

// roues setup
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use('/static', express.static(path.join(__dirname, 'statics')));

// mount error handler
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Server app running on ${port}`.yellow.bold);
});

// handle unhandle rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Errpr: ${err.message}`.red);
  server.close(() => process.exit(1));
});


// 先引入相关依赖（放在文件头部）
const { InfluxDB } = require('@influxdata/influxdb-client')

// ...

// 从环境变量中读取

const INFLUX_URL = "http://112.74.73.44:8086"
const INFLUX_TOKEN = "kwpEoMpBlN-afgAGaCeMXPrl9I_IdKgFhlUucrfKz2iLn-8rrHrMVr0_Th7ABVlQe0sbkciRO3xf-2eUrrdGVw=="
const INFLUX_ORG= "EAS"
const INFLUX_BUCKET= "Honghaiwan"
// 初始化 InfluxDB 客户端
const influxDB = new InfluxDB({
  url: INFLUX_URL,
  token: INFLUX_TOKEN
});

// 在 server.js 中添加一个温度路由
app.get("/api/v1/influx/atmosphere/temperature", async (req, res) => {
  try {
    const queryApi = influxDB.getQueryApi(INFLUX_ORG);
    
    // 这里的查询语句与面板中类似
    // 注意：v.timeRangeStart, v.timeRangeStop 这类变量是面板中的变量
    // 在纯后端中你需要手动指定或通过前端传参
    const fluxQuery = `
      from(bucket: "${INFLUX_BUCKET}")
        |> range(start: -60d)                         // 这里示例：查询最近1小时
        |> filter(fn: (r) => r["_measurement"] == "Honghaiwan")
        |> filter(fn: (r) => r["_field"] == "Ta")
        |> filter(fn: (r) => r["id"] == "2601"
                         or r["id"] == "2602"
                         or r["id"] == "2603"
                         or r["id"] == "2604"
                         or r["id"] == "2605"
                         or r["id"] == "2606"
                         or r["id"] == "2607"
                         or r["id"] == "2608")
    `;
    
    // 执行查询并收集结果
    const rows = [];
    await new Promise((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const data = tableMeta.toObject(row);
          rows.push(data);
        },
        error(error) {
          reject(error);
        },
        complete() {
          resolve();
        }
      });
    });
    
    // 返回给前端
    res.status(200).json({
      success: true,
      data: rows,
    });
    
  } catch (error) {
    console.error("查询出错:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 在 server.js 中添加一个湿度路由
app.get("/api/v1/influx/atmosphere/humidity", async (req, res) => {
  try {
    const queryApi = influxDB.getQueryApi(INFLUX_ORG);
    
    // 这里的查询语句与面板中类似
    // 注意：v.timeRangeStart, v.timeRangeStop 这类变量是面板中的变量
    // 在纯后端中你需要手动指定或通过前端传参
    const fluxQuery = `
      from(bucket: "${INFLUX_BUCKET}")
        |> range(start: -60d)                         // 这里示例：查询最近1小时
        |> filter(fn: (r) => r["_measurement"] == "Honghaiwan")
        |> filter(fn: (r) => r["_field"] == "RH")
        |> filter(fn: (r) => r["id"] == "2601"
                         or r["id"] == "2602"
                         or r["id"] == "2603"
                         or r["id"] == "2604"
                         or r["id"] == "2605"
                         or r["id"] == "2606"
                         or r["id"] == "2607"
                         or r["id"] == "2608")
    `;
    
    // 执行查询并收集结果
    const rows = [];
    await new Promise((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const data = tableMeta.toObject(row);
          rows.push(data);
        },
        error(error) {
          reject(error);
        },
        complete() {
          resolve();
        }
      });
    });
    
    // 返回给前端
    res.status(200).json({
      success: true,
      data: rows,
    });
    
  } catch (error) {
    console.error("查询出错:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 在 server.js 中添加一个腐蚀量路由
app.get("/api/v1/influx/atmosphere/corrosion", async (req, res) => {
  try {
    const queryApi = influxDB.getQueryApi(INFLUX_ORG);
    
    // 这里的查询语句与面板中类似
    // 注意：v.timeRangeStart, v.timeRangeStop 这类变量是面板中的变量
    // 在纯后端中你需要手动指定或通过前端传参
    const fluxQuery = `
      from(bucket: "${INFLUX_BUCKET}")
        |> range(start: -60d)                         // 这里示例：查询最近1小时
        |> filter(fn: (r) => r["_measurement"] == "Honghaiwan")
        |> filter(fn: (r) => r["_field"] == "corrosion")
        |> filter(fn: (r) => r["id"] == "2601"
                         or r["id"] == "2602"
                         or r["id"] == "2603"
                         or r["id"] == "2604"
                         or r["id"] == "2605"
                         or r["id"] == "2606"
                         or r["id"] == "2607"
                         or r["id"] == "2608")
    `;
    
    // 执行查询并收集结果
    const rows = [];
    await new Promise((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const data = tableMeta.toObject(row);
          rows.push(data);
        },
        error(error) {
          reject(error);
        },
        complete() {
          resolve();
        }
      });
    });
    
    // 返回给前端
    res.status(200).json({
      success: true,
      data: rows,
    });
    
  } catch (error) {
    console.error("查询出错:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 在 server.js 中添加一个腐蚀速度路由
app.get("/api/v1/influx/atmosphere/corrRate", async (req, res) => {
  try {
    const queryApi = influxDB.getQueryApi(INFLUX_ORG);
    
    // 这里的查询语句与面板中类似
    // 注意：v.timeRangeStart, v.timeRangeStop 这类变量是面板中的变量
    // 在纯后端中你需要手动指定或通过前端传参
    const fluxQuery = `
      from(bucket: "${INFLUX_BUCKET}")
        |> range(start: -60d)                         // 这里示例：查询最近1小时
        |> filter(fn: (r) => r["_measurement"] == "Honghaiwan")
        |> filter(fn: (r) => r["_field"] == "corrRate")
        |> filter(fn: (r) => r["id"] == "2601"
                         or r["id"] == "2602"
                         or r["id"] == "2603"
                         or r["id"] == "2604"
                         or r["id"] == "2605"
                         or r["id"] == "2606"
                         or r["id"] == "2607"
                         or r["id"] == "2608")
    `;
    
    // 执行查询并收集结果
    const rows = [];
    await new Promise((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const data = tableMeta.toObject(row);
          rows.push(data);
        },
        error(error) {
          reject(error);
        },
        complete() {
          resolve();
        }
      });
    });
    
    // 返回给前端
    res.status(200).json({
      success: true,
      data: rows,
    });
    
  } catch (error) {
    console.error("查询出错:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 在 server.js 中添加一个平均比率路由
app.get("/api/v1/influx/atmosphere/aveRate", async (req, res) => {
  try {
    const queryApi = influxDB.getQueryApi(INFLUX_ORG);
    
    // 这里的查询语句与面板中类似
    // 注意：v.timeRangeStart, v.timeRangeStop 这类变量是面板中的变量
    // 在纯后端中你需要手动指定或通过前端传参
    const fluxQuery = `
      from(bucket: "${INFLUX_BUCKET}")
        |> range(start: -60d)                         // 这里示例：查询最近1小时
        |> filter(fn: (r) => r["_measurement"] == "Honghaiwan")
        |> filter(fn: (r) => r["_field"] == "aveRate")
        |> filter(fn: (r) => r["id"] == "2601"
                         or r["id"] == "2602"
                         or r["id"] == "2603"
                         or r["id"] == "2604"
                         or r["id"] == "2605"
                         or r["id"] == "2606"
                         or r["id"] == "2607"
                         or r["id"] == "2608")
    `;
    
    // 执行查询并收集结果
    const rows = [];
    await new Promise((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const data = tableMeta.toObject(row);
          rows.push(data);
        },
        error(error) {
          reject(error);
        },
        complete() {
          resolve();
        }
      });
    });
    
    // 返回给前端
    res.status(200).json({
      success: true,
      data: rows,
    });
    
  } catch (error) {
    console.error("查询出错:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});