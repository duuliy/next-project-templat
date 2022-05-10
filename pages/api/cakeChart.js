
export default function handle(req, res) {
  // 返回非 json 数据
  // res.end('Hello World')

  // 返回 json 数据
  res.json({
    code: '200',
    msg: 'success',
    body: {
      name: 'text1',
      type: 'chatTime',
      children: {
        id: Math.random(),
        data: [
          { type: 'car', value: 93.33 },
          { type: 'phone', value: 6.67 }
        ]
      },
    }
  })
}