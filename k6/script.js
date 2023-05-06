import { check } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 700,
  duration: '10m',
};

export default function () {
  const res = http.get('http://192.168.56.2/');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}

