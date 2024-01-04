import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedApplePayMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.656 8.969v-.031c.25-.292.365-.636.344-1.032-.375.021-.698.188-.969.5a1.42 1.42 0 0 0-.375 1c.417 0 .75-.146 1-.437ZM4 9.5c.125 0 .302.031.531.094.25.083.48.27.688.562h-.032c-.083.042-.208.167-.375.375-.187.188-.291.48-.312.875.02.459.146.792.375 1 .25.209.417.323.5.344 0 .02-.042.125-.125.313a4.31 4.31 0 0 1-.313.624 4.197 4.197 0 0 1-.468.563.88.88 0 0 1-.563.25c-.208 0-.375-.042-.5-.125-.146-.083-.344-.135-.594-.156-.25.02-.447.073-.593.156a1.394 1.394 0 0 1-.469.125.811.811 0 0 1-.594-.25 3.47 3.47 0 0 1-.468-.594c-.292-.437-.5-.969-.625-1.594-.126-.624-.053-1.197.218-1.718.313-.521.771-.802 1.375-.844.23.02.448.083.657.188.166.062.302.104.406.124.104-.02.24-.062.406-.124.25-.126.542-.188.875-.188Zm3.125-1.156h2.281c.604.02 1.094.208 1.469.562.354.375.531.854.531 1.438 0 .604-.187 1.094-.562 1.469-.354.354-.844.541-1.469.562H8.062v2.063h-.937V8.343Zm.938.812v2.406h1.093c.854-.02 1.292-.416 1.313-1.187-.021-.792-.459-1.198-1.313-1.219H8.062Zm5.093 5.344c-.458 0-.823-.125-1.094-.375-.27-.23-.406-.542-.406-.938.021-.791.584-1.229 1.688-1.312l1.187-.063v-.343c-.02-.5-.323-.75-.906-.75-.5.02-.802.229-.906.625h-.844c.02-.417.198-.75.531-1 .313-.25.73-.375 1.25-.375.542 0 .969.135 1.281.406.334.25.5.594.5 1.031v3.031h-.874v-.718h-.032c-.291.5-.75.76-1.375.781Zm.25-.719c.334 0 .604-.094.813-.281a.89.89 0 0 0 .312-.688v-.343l-1.062.062c-.584.042-.886.25-.906.625.041.396.322.604.843.625Zm3.188 2.313h-.344v-.75c.083.02.177.031.281.031.396.02.657-.188.782-.625l.093-.281-1.593-4.438h.968l1.125 3.594h.032l1.093-3.594H20l-1.656 4.656c-.188.521-.407.886-.657 1.094-.27.23-.635.334-1.093.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePayMdIcon);
export default ForwardRef;
