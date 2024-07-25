import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPostBillpayBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#D71635'
        d='M6.984 14.167h46.044c1.648 0 2.984 1.322 2.984 2.954V62.88c0 1.632-1.336 2.954-2.984 2.954H6.984A2.97 2.97 0 0 1 4 62.88V17.12c0-1.632 1.336-2.954 2.984-2.954'
      />
      <path
        fill='#fff'
        d='M25.142 23.757c-6.995 2.085-12.086 8.506-12.086 16.11 0 7.6 5.101 14.02 12.095 16.099l-.006-32.209zm4.9-.713q-.594 0-1.18.042v1.727a10 10 0 0 1 .7-.026c5.841 0 10.575 4.681 10.578 10.457 0 5.737-4.662 10.398-10.444 10.467v10.962h.358c9.382 0 16.986-7.532 16.986-16.82-.004-9.284-7.614-16.812-16.999-16.809M69.531 32.42h3.763q1.866 0 2.648-.688c.522-.456.786-1.105.786-1.935a2.57 2.57 0 0 0-.463-1.548 2.15 2.15 0 0 0-1.215-.85c-.326-.085-.922-.13-1.798-.13h-3.72zm-1.928 7.554V25.572h5.492q1.448 0 2.216.136 1.069.176 1.791.675c.489.329.873.791 1.17 1.387q.441.897.443 1.968 0 1.837-1.183 3.108-1.183 1.27-4.267 1.27H69.53v5.858zm14.506-5.22q0 2.006.88 3.005.889.996 2.228.996a2.83 2.83 0 0 0 2.215-1.003q.88-1 .88-3.053.002-1.94-.886-2.931a2.83 2.83 0 0 0-2.209-1 2.85 2.85 0 0 0-2.225.993q-.884.99-.883 2.994m-1.837.004c0-1.932.54-3.365 1.629-4.293a4.94 4.94 0 0 1 3.316-1.16c1.446 0 2.632.469 3.55 1.41q1.383 1.41 1.382 3.893-.002 2.018-.609 3.17-.61 1.155-1.779 1.792a5.2 5.2 0 0 1-2.544.638q-2.217 0-3.583-1.4-1.36-1.407-1.362-4.05M91.53 36.86l1.766-.273a2.4 2.4 0 0 0 .83 1.609q.68.561 1.9.56 1.231.002 1.824-.495a1.47 1.47 0 0 0 .6-1.166 1.08 1.08 0 0 0-.528-.945c-.244-.153-.853-.355-1.824-.596-1.313-.326-2.222-.612-2.727-.847a2.7 2.7 0 0 1-1.153-.994 2.6 2.6 0 0 1-.391-1.4 2.64 2.64 0 0 1 .326-1.294 2.86 2.86 0 0 1 .876-.987q.415-.304 1.137-.514a5.4 5.4 0 0 1 1.544-.212 6.2 6.2 0 0 1 2.18.352c.622.238 1.084.553 1.384.96q.445.603.616 1.616l-1.75.235a1.88 1.88 0 0 0-.69-1.257q-.567-.454-1.613-.453-1.23-.001-1.76.404-.521.402-.52.944 0 .342.215.62c.182.214.418.376.684.468q.272.1 1.58.453 1.897.499 2.645.821.752.318 1.176.929c.287.404.427.912.427 1.511a2.94 2.94 0 0 1-.521 1.665q-.52.782-1.502 1.209a5.5 5.5 0 0 1-2.225.426q-2.051 0-3.13-.843-1.077-.847-1.376-2.506m14.78 1.535.261 1.563a7 7 0 0 1-1.352.154c-.651 0-1.15-.098-1.508-.303a1.72 1.72 0 0 1-.756-.802q-.22-.497-.218-2.085v-6.007h-1.31v-1.378h1.31v-2.583l1.778-1.062v3.648h1.795v1.375h-1.795v6.099q.001.757.095.974a.7.7 0 0 0 .306.342q.215.13.609.13.303.001.785-.065M69.45 56.226h3.626q.928-.001 1.31-.065a3.2 3.2 0 0 0 1.11-.394 2.06 2.06 0 0 0 .733-.802c.2-.373.3-.791.29-1.215a2.4 2.4 0 0 0-.417-1.4 2.24 2.24 0 0 0-1.156-.834c-.492-.16-1.206-.238-2.13-.238H69.45zm0-6.649h3.147q1.28.001 1.837-.17c.439-.108.829-.36 1.108-.716.258-.367.389-.809.371-1.257.01-.445-.11-.883-.345-1.26a1.78 1.78 0 0 0-.994-.75c-.43-.13-1.172-.199-2.215-.199h-2.91zm-1.925 8.35V43.525h5.46q1.666 0 2.674.436 1.01.438 1.58 1.346.57.906.57 1.902c0 .616-.175 1.22-.505 1.74-.339.544-.847.98-1.531 1.316q1.32.382 2.03 1.303.713.927.713 2.182-.002 1.015-.433 1.883c-.245.526-.611.986-1.069 1.342q-.635.47-1.593.71c-.638.164-1.42.242-2.345.242zM80.947 57.927h1.788V47.492h-1.788zm0-12.37h1.788v-2.032h-1.788zm4.466 12.37H87.2V43.525h-1.788zm4.518 0h1.789V43.525H89.93zm5.757 3.32h-1.57V48.55h1.57v1.075c.84-.791 1.843-1.192 2.984-1.192 1.244 0 2.326.479 3.212 1.427.879.941 1.326 2.091 1.326 3.42 0 1.326-.447 2.476-1.326 3.414a4.27 4.27 0 0 1-3.212 1.424 4.26 4.26 0 0 1-2.984-1.18zm2.984-4.64a2.9 2.9 0 0 0 2.189-.974c.599-.651.902-1.44.902-2.355 0-.912-.303-1.7-.902-2.352a2.89 2.89 0 0 0-2.19-.974 2.9 2.9 0 0 0-2.195.974q-.913.972-.912 2.346v.006q0 1.373.912 2.355.907.974 2.196.974m9.906-6.515a2.8 2.8 0 0 0-2.108.941 3.23 3.23 0 0 0-.879 2.271c0 .88.296 1.642.879 2.264a2.79 2.79 0 0 0 4.196 0c.587-.619.88-1.384.88-2.264a3.2 3.2 0 0 0-.88-2.27 2.74 2.74 0 0 0-.94-.701 2.75 2.75 0 0 0-1.148-.241m0 8.05c-1.254 0-2.342-.476-3.228-1.42a4.86 4.86 0 0 1-1.329-3.418c0-1.326.446-2.479 1.326-3.424.889-.945 1.977-1.42 3.231-1.42 1.131 0 2.127.397 2.968 1.182v-1.09h1.57v9.495h-1.57v-1.081c-.841.782-1.837 1.176-2.968 1.176m11.044 3.124a4.04 4.04 0 0 1-2.141-.635 4.7 4.7 0 0 1-1.713-1.668l-.062-.098 1.329-.88.065.111q.426.7 1.075 1.111c.437.264.936.408 1.447.417a2.45 2.45 0 0 0 1.899-.896 3.25 3.25 0 0 0 .883-1.893 4 4 0 0 1-2.782 1.154c-1.202 0-2.235-.48-3.069-1.424a4.72 4.72 0 0 1-1.323-3.33v-4.684h1.571v4.685c0 .824.293 1.56.879 2.189.564.612 1.219.925 1.942.931a2.4 2.4 0 0 0 1.922-.928 3.15 3.15 0 0 0 .883-2.192V48.55H124v8.073l-.052.52c-.163 1.174-.678 2.157-1.518 2.936a3.88 3.88 0 0 1-2.808 1.186'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPostBillpayBrandDarkIcon);
export default ForwardRef;