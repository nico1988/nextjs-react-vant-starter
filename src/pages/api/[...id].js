import apiService from '../../services/axios-server';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  apiService({
    method: req.method,
    url: req.url,
    data: req.body,
    headers: {
      ...req.headers
    },
    params: req.params
  })
    .then((response) => {
      res.status(response.status).json(response);
    })
    .catch((err) => {
      res.status(err?.response?.status || 400).json(err);
    });
}
