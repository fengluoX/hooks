---
nav:
  title: Hooks
  path: /Hooks
---

## useLoading

Demo:

```tsx
import React from 'react';
import { Button } from 'antd';
import { useLoading } from 'luoyehooks';
import 'antd/dist/antd.css';

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const Demo: React.FC = () => {
  const [loading, withLoading] = useLoading();

  return (
    <Button type="primary" loading={loading} onClick={() => withLoading(() => sleep(3000))}>
      点击loading 3s
    </Button>
  );
};

export default Demo;

```

