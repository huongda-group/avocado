type SchemaField<T> = {
  type: T; // Kiểu generic T xác định chính xác kiểu dữ liệu
  default?: T['_type']; // default phải phù hợp
  nullable?: boolean; // nullable tùy chọn
};

// Định nghĩa SchemaSchema chính xác hơn:
type SchemaSchema = {
  [key: string]:
    | SchemaField<DataTypeString | DataTypeNumber | DataTypeBoolean> // Các kiểu dữ liệu cụ thể
    | SchemaSchema // Đệ quy hỗ trợ cho nested schema
    | SchemaField<DataTypeString | DataTypeNumber | DataTypeBoolean>[] // Mảng SchemaField
    | SchemaSchema[]; // Mảng nested schema
};

const structure: SchemaSchema = {
  hello: [
    {
      name: {
        type: { _type: 'string' }, // `_type` là string
        default: 875634,          // ❌ Lỗi: `default` không phù hợp với `_type: string`
      },
      age: {
        type: { _type: 123 },     // `_type` là number
        default: 456,            // ✅ Hợp lệ
      },
    },
  ],
  key: {
    nghi: {
      type: { _type: 'string' }, // `_type` là string
      default: 'valid',         // ✅ Hợp lệ
    },
  },
};
