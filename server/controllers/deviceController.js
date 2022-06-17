const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models");
const ApiError = require("../errors/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { typeId, brandId, name, price, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      img.mv(path.resolve(__dirname, "..", "static", fileName)); // move img to static folder

      if (info) {
        info = JSON.parse(info);
        info.forEach((item) =>
          DeviceInfo.create({
            title: item.title,
            description: item.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    let devices;

    // Пагинация
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;

    if (!brandId && !typeId) {
      // devices = await Device.findAll({ limit, offset });
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }
  async getSingle(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }], // достаем сразу данные описания девайса из модели DeviceInfo
    });

    return res.json(device);
  }
}

module.exports = new DeviceController();
