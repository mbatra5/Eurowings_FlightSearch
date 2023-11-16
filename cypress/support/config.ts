import { v4 as uuidv4 } from 'uuid'

class GenerateUUID {
  static getV4() {
    return uuidv4()
  }
}

export default GenerateUUID