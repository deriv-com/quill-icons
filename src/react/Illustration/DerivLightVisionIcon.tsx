import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightVisionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 120 152'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#04c3ca0a9aa3b6f5e71086b760ac42ca__a)'>
      <path
        fill='#EBECEE'
        d='m107.268 85.897-15.755 9.117a77 77 0 0 0-6.383-10.999 80.6 80.6 0 0 0-11.706-13.41 74 74 0 0 0-7.826-6.27c-4.253-2.954-8.774-5.403-13.46-7.207a53 53 0 0 0-1.113-.415c-7.868-2.84-15.24-3.49-21.628-2.25-2.763.535-5.341 1.425-7.697 2.644l13.586-7.865c8.26-5.322 19.815-6.155 32.607-1.233 16.824 6.476 31.515 21.271 39.373 37.885z'
      />
      <path
        fill='#000'
        d='M91.513 95.313a.302.302 0 0 1-.267-.17 77 77 0 0 0-6.358-10.955 80 80 0 0 0-11.664-13.36 74 74 0 0 0-7.794-6.244c-4.32-3-8.827-5.414-13.397-7.173a52 52 0 0 0-1.107-.412c-7.55-2.726-14.974-3.498-21.47-2.238-2.717.526-5.28 1.406-7.617 2.616a.297.297 0 0 1-.285-.522L35.14 48.99c4.224-2.722 9.188-4.238 14.739-4.498 5.733-.268 11.83.823 18.123 3.245 8.159 3.14 16.165 8.399 23.15 15.205 6.78 6.606 12.446 14.5 16.386 22.829a.3.3 0 0 1-.12.385l-15.755 9.117a.3.3 0 0 1-.149.04zM35.778 53.577c4.883 0 10.088.962 15.347 2.86.332.12.688.252 1.12.416 4.614 1.778 9.165 4.214 13.522 7.24a75 75 0 0 1 7.857 6.295 80.6 80.6 0 0 1 11.75 13.46 77.6 77.6 0 0 1 6.268 10.75l15.239-8.82c-3.906-8.175-9.483-15.92-16.147-22.41-6.928-6.752-14.864-11.964-22.949-15.076-6.215-2.392-12.231-3.47-17.881-3.206-5.446.254-10.31 1.739-14.458 4.411l-9.664 5.595q1.73-.56 3.558-.915a33.7 33.7 0 0 1 6.438-.599z'
      />
      <path
        fill='#EBECEE'
        d='M107.268 85.896a25.9 25.9 0 0 1-9.217 7.735l-13.049 7.551a25.8 25.8 0 0 0 5.631-5.051q.454-.545.88-1.118z'
      />
      <path
        fill='#000'
        d='M85.001 101.482a.296.296 0 0 1-.163-.545 25.5 25.5 0 0 0 6.435-6.1.3.3 0 0 1 .09-.08l15.754-9.117a.296.296 0 0 1 .388.434 26.16 26.16 0 0 1-9.314 7.82L85.15 101.44a.3.3 0 0 1-.149.04zm6.713-6.239q-.422.564-.853 1.08a26 26 0 0 1-2.364 2.496l9.404-5.442.015-.01a25.5 25.5 0 0 0 8.152-6.431l-14.355 8.307z'
      />
      <path
        fill='#fff'
        d='M91.51 95.018a25 25 0 0 1-.879 1.117A25.8 25.8 0 0 1 85 101.187a26 26 0 0 1-2.702 1.564h-.003c-8.023 4.034-18.586 4.292-30.157-.162-16.826-6.476-31.516-21.27-39.375-37.883a25.9 25.9 0 0 1 8.938-7.594c2.355-1.219 4.934-2.108 7.696-2.644 6.388-1.24 13.76-.59 21.628 2.25q.554.2 1.113.415c4.686 1.804 9.207 4.253 13.46 7.208a74 74 0 0 1 7.826 6.268A80.6 80.6 0 0 1 85.131 84.02a77 77 0 0 1 6.383 10.999z'
      />
      <path
        fill='#000'
        d='M68.471 106.142c-5.203 0-10.768-1.093-16.44-3.276-8.16-3.14-16.166-8.398-23.152-15.205-6.78-6.606-12.446-14.499-16.386-22.828a.3.3 0 0 1 .03-.305 26.15 26.15 0 0 1 9.038-7.68c2.389-1.235 5.004-2.134 7.777-2.671 6.602-1.282 14.135-.5 21.786 2.262.331.119.688.251 1.119.416 4.614 1.778 9.165 4.213 13.522 7.24a75 75 0 0 1 7.857 6.294 80.6 80.6 0 0 1 11.75 13.46 77.5 77.5 0 0 1 6.407 11.041c.047.1.035.217-.03.305-.291.39-.592.77-.89 1.13a26.2 26.2 0 0 1-5.685 5.101q-.005.005-.012.007a26 26 0 0 1-2.733 1.582c-4.146 2.083-8.88 3.125-13.96 3.125zM13.107 64.741c3.907 8.204 9.5 15.98 16.187 22.494 6.928 6.751 14.864 11.963 22.949 15.075 11.05 4.255 21.677 4.318 29.917.176a26 26 0 0 0 2.663-1.541l.012-.009a25.5 25.5 0 0 0 6.328-5.957 77 77 0 0 0-6.282-10.794 80 80 0 0 0-11.663-13.36 74 74 0 0 0-7.795-6.243c-4.32-3.001-8.826-5.414-13.396-7.174a51 51 0 0 0-1.107-.412c-7.55-2.725-14.974-3.498-21.47-2.238-2.717.526-5.28 1.406-7.617 2.616a25.6 25.6 0 0 0-8.728 7.364z'
      />
      <path
        fill='#EBECEE'
        d='M66.371 97.107c6.495-5.363 5.386-17.431-2.478-26.954s-19.505-12.895-26-7.53c-6.495 5.363-5.385 17.43 2.479 26.954 7.864 9.523 19.504 12.894 26 7.53'
      />
      <path
        fill='#000'
        d='M58.76 99.94c-2.134 0-4.416-.443-6.733-1.335C41.74 94.645 33.37 83.047 33.37 72.751c0-4.794 1.809-8.678 5.093-10.932 3.564-2.446 8.587-2.703 13.78-.705C62.53 65.075 70.9 76.673 70.9 86.97c0 4.794-1.809 8.678-5.093 10.932-1.975 1.355-4.396 2.039-7.047 2.039M45.51 60.374c-2.532 0-4.838.648-6.712 1.935-3.118 2.14-4.835 5.85-4.835 10.442 0 10.072 8.2 21.42 18.279 25.3 5.008 1.928 9.829 1.694 13.23-.64 3.117-2.14 4.834-5.85 4.834-10.442 0-10.072-8.2-21.42-18.279-25.3-2.247-.865-4.458-1.295-6.518-1.295'
      />
      <path
        fill='#B1B4BC'
        d='M56.741 85.447c2.102-1.736 1.743-5.642-.802-8.724s-6.313-4.173-8.415-2.437-1.743 5.642.802 8.724 6.313 4.173 8.415 2.437'
      />
      <path
        fill='#000'
        d='M54.28 86.56a6.3 6.3 0 0 1-2.252-.446c-3.4-1.309-6.167-5.146-6.167-8.554 0-1.62.617-2.935 1.736-3.703 1.208-.831 2.902-.922 4.645-.25 3.4 1.31 6.168 5.147 6.168 8.554 0 1.62-.617 2.935-1.736 3.704-.673.462-1.496.695-2.394.695m-4.29-12.804c-.778 0-1.485.197-2.058.591-.952.654-1.477 1.795-1.477 3.213 0 3.183 2.597 6.772 5.787 8 1.558.599 3.051.532 4.096-.186.953-.654 1.477-1.795 1.477-3.213 0-3.183-2.596-6.772-5.787-8-.704-.27-1.395-.405-2.037-.405'
      />
      <path fill='#FF7E88' d='m114.716 38.686-9.512 5.492-12.506-4.552-9.511-3.462 9.511-5.492z' />
      <path
        fill='#000'
        d='M105.205 44.476a.3.3 0 0 1-.101-.018l-22.018-8.014a.299.299 0 0 1-.047-.538l9.511-5.492a.3.3 0 0 1 .25-.022l22.017 8.013a.3.3 0 0 1 .195.254.3.3 0 0 1-.147.284l-9.512 5.493a.3.3 0 0 1-.148.04m-21.318-8.373 21.288 7.749 8.839-5.105L92.727 31z'
      />
      <path fill='#FF7E88' d='M114.716 38.685v22.017l-9.511 5.492V44.178z' />
      <path
        fill='#000'
        d='M105.206 66.491a.298.298 0 0 1-.298-.297V44.178c0-.105.057-.205.149-.257l9.511-5.493a.297.297 0 0 1 .446.257v22.018a.3.3 0 0 1-.148.257l-9.512 5.491a.3.3 0 0 1-.148.04m.297-22.142v21.33l8.917-5.149V39.2z'
      />
      <path
        fill='#FF444F'
        d='M105.204 44.18v22.015l-9.232-3.36V50.05l-12.785-4.653v-9.233l9.511 3.462z'
      />
      <path
        fill='#000'
        d='M105.205 66.493a.3.3 0 0 1-.101-.018l-9.232-3.36a.3.3 0 0 1-.196-.28V50.26l-12.59-4.582a.3.3 0 0 1-.196-.28v-9.233a.3.3 0 0 1 .127-.244.3.3 0 0 1 .272-.035l22.017 8.015a.3.3 0 0 1 .196.279v22.016a.296.296 0 0 1-.297.297m-8.935-3.865 8.638 3.143V44.388L83.485 36.59v8.6l12.589 4.582a.3.3 0 0 1 .196.28z'
      />
      <path fill='#FF7E88' d='M95.972 127.381v8.953l-3.274-1.192-9.511-3.461 9.511-5.492z' />
      <path
        fill='#000'
        d='M95.973 136.632a.3.3 0 0 1-.101-.018l-12.786-4.653a.298.298 0 0 1-.048-.538l9.512-5.492a.3.3 0 0 1 .25-.022l3.274 1.192a.3.3 0 0 1 .196.279v8.953a.3.3 0 0 1-.126.244.3.3 0 0 1-.171.053zm-12.086-5.012 11.788 4.291v-8.32l-2.948-1.073-8.84 5.104z'
      />
      <path fill='#FF7E88' d='M114.716 121.42v22.016l-9.511 5.491v-22.015l.279-.162z' />
      <path
        fill='#000'
        d='M105.206 149.224a.3.3 0 0 1-.298-.297v-22.016c0-.105.057-.204.149-.257l.279-.162 9.232-5.329a.296.296 0 0 1 .446.257v22.016a.3.3 0 0 1-.148.257l-9.512 5.491a.3.3 0 0 1-.148.04m.297-22.142v21.329l8.917-5.148v-21.329z'
      />
      <path fill='#FF7E88' d='m114.716 121.418-9.232 5.33-.279.162-9.232-3.361 9.511-5.491z' />
      <path
        fill='#000'
        d='M105.205 127.207a.3.3 0 0 1-.101-.018l-9.232-3.36a.298.298 0 0 1-.047-.538l9.511-5.491a.3.3 0 0 1 .25-.022l9.232 3.36a.298.298 0 0 1 .047.538l-9.511 5.491a.3.3 0 0 1-.149.04m-8.532-3.718 8.503 3.094.159-.092 8.68-5.011-8.502-3.094z'
      />
      <path
        fill='#FF444F'
        d='M105.204 126.911v22.016l-22.017-8.013v-9.232l9.511 3.461 3.274 1.192v-12.784z'
      />
      <path
        fill='#000'
        d='M105.205 149.225a.3.3 0 0 1-.101-.018l-22.017-8.014a.3.3 0 0 1-.197-.279v-9.232c0-.096.048-.187.127-.244a.3.3 0 0 1 .272-.035l12.387 4.507v-12.359a.3.3 0 0 1 .126-.243.3.3 0 0 1 .272-.036l9.232 3.36a.3.3 0 0 1 .196.28v22.015a.3.3 0 0 1-.297.298m-21.72-8.519 21.423 7.796V127.12l-8.638-3.144v12.359a.3.3 0 0 1-.126.244.3.3 0 0 1-.272.036l-12.387-4.508z'
      />
      <path fill='#FF7E88' d='m36.838 10.343-9.511 5.491-12.506-4.552L5.309 7.82l9.512-5.49z' />
      <path
        fill='#000'
        d='M27.327 16.131a.3.3 0 0 1-.101-.018L5.209 8.1a.299.299 0 0 1-.048-.538l9.511-5.49a.3.3 0 0 1 .25-.022l22.017 8.014a.299.299 0 0 1 .048.538l-9.512 5.492a.3.3 0 0 1-.148.04zM6.01 7.758l21.287 7.75 8.84-5.104-21.288-7.749z'
      />
      <path fill='#FF7E88' d='M36.839 10.342v9.232l-9.512 5.491v-9.232z' />
      <path
        fill='#000'
        d='M27.328 25.363a.298.298 0 0 1-.297-.297v-9.232c0-.106.056-.205.148-.257l9.512-5.491a.298.298 0 0 1 .446.257v9.232a.3.3 0 0 1-.15.257l-9.51 5.491a.3.3 0 0 1-.149.04m.297-9.358v8.545l8.917-5.148v-8.545z'
      />
      <path
        fill='#FF444F'
        d='M27.327 15.834v9.232l-3.274-1.192-9.232-3.36-.28-.101v12.784l-9.232-3.36V7.819l9.512 3.463z'
      />
      <path
        fill='#000'
        d='M14.542 33.494a.3.3 0 0 1-.101-.018l-9.232-3.36a.3.3 0 0 1-.196-.28V7.82a.3.3 0 0 1 .126-.243.3.3 0 0 1 .272-.036l22.017 8.015a.3.3 0 0 1 .196.28v9.231a.3.3 0 0 1-.126.244.3.3 0 0 1-.272.036l-12.387-4.51v12.36a.295.295 0 0 1-.297.297M5.607 29.63l8.638 3.143V20.413a.3.3 0 0 1 .126-.244.29.29 0 0 1 .272-.035l.28.1 12.107 4.407v-8.599L5.607 8.244z'
      />
      <path fill='#FF7E88' d='M24.053 23.873v3.832l-9.512 5.49V20.413l.28.101z' />
      <path
        fill='#000'
        d='M14.542 33.493a.298.298 0 0 1-.297-.297V20.412a.295.295 0 0 1 .398-.28l.28.102 9.231 3.36a.3.3 0 0 1 .196.28v3.83a.3.3 0 0 1-.148.258l-9.512 5.49a.3.3 0 0 1-.148.041m.297-12.658v11.846l8.917-5.147V24.08z'
      />
      <path fill='#FF7E88' d='m24.053 88.42-9.232 5.33-.28.162-9.232-3.36 9.512-5.492z' />
      <path
        fill='#000'
        d='M14.542 94.21a.3.3 0 0 1-.101-.019l-9.232-3.36a.299.299 0 0 1-.048-.538l9.511-5.491a.3.3 0 0 1 .25-.022l9.232 3.36a.299.299 0 0 1 .047.538l-9.51 5.491a.3.3 0 0 1-.15.04M6.01 90.49l8.502 3.095.159-.092 8.68-5.011-8.502-3.094z'
      />
      <path
        fill='#FF7E88'
        d='m36.838 105.858-9.511 5.491-12.506-4.552-.28-.101V93.912l.28-.162 9.232-5.33v12.785z'
      />
      <path
        fill='#000'
        d='M27.327 111.647a.3.3 0 0 1-.1-.018l-12.786-4.653a.3.3 0 0 1-.196-.279V93.913c0-.105.056-.204.148-.257l.28-.162 9.232-5.33a.298.298 0 0 1 .446.257v12.576l12.589 4.582a.298.298 0 0 1 .047.538l-9.511 5.492a.3.3 0 0 1-.149.04zm-12.488-5.158.083.03 12.377 4.504 8.84-5.103-12.187-4.435a.3.3 0 0 1-.196-.279v-12.27l-8.917 5.148v12.405'
      />
      <path
        fill='#FF444F'
        d='M27.327 111.35v9.232l-22.018-8.014V90.553l9.232 3.36v12.784l.28.101z'
      />
      <path
        fill='#000'
        d='M27.327 120.88a.3.3 0 0 1-.1-.018l-22.018-8.014a.3.3 0 0 1-.196-.279V90.553a.3.3 0 0 1 .126-.243.3.3 0 0 1 .272-.036l9.232 3.36a.3.3 0 0 1 .196.28v12.575l.083.03 12.506 4.552a.3.3 0 0 1 .196.279v9.232a.3.3 0 0 1-.297.298m-21.72-8.519 21.423 7.796v-8.598l-12.59-4.582a.3.3 0 0 1-.195-.28V94.122l-8.638-3.144z'
      />
      <path fill='#FF7E88' d='M36.839 105.859v9.232l-9.512 5.491v-9.232z' />
      <path
        fill='#000'
        d='M27.328 120.88a.299.299 0 0 1-.297-.298v-9.231c0-.106.056-.206.148-.258l9.512-5.491a.298.298 0 0 1 .445.257v9.232a.3.3 0 0 1-.148.257l-9.511 5.492a.3.3 0 0 1-.149.04m.297-9.359v8.546l8.917-5.148v-8.546z'
      />
    </g>
    <defs>
      <clipPath id='04c3ca0a9aa3b6f5e71086b760ac42ca__a'>
        <path fill='#fff' d='M0 0h120v152H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightVisionIcon);
export default ForwardRef;
