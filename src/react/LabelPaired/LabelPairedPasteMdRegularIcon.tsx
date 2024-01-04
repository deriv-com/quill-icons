import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPasteMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5 5c-.396.02-.635.219-.719.594-.083.25-.25.385-.5.406H3.5c-.313.02-.48.188-.5.5V7h4v-.5c-.02-.313-.188-.48-.5-.5h-.281c-.25-.02-.407-.156-.469-.406C5.646 5.219 5.396 5.02 5 5ZM2 6a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v9c0 .292.094.531.281.719A.974.974 0 0 0 2 17h4v1H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5h1.406c.334-.625.865-.958 1.594-1 .73.042 1.26.375 1.594 1H8c.563.02 1.031.219 1.406.594S9.98 6.437 10 7H9a.973.973 0 0 0-.281-.719A.973.973 0 0 0 8 6h-.094c.063.167.094.333.094.5V7a.973.973 0 0 1-.281.719A.973.973 0 0 1 7 8H3a.973.973 0 0 1-.719-.281A.973.973 0 0 1 2 7v-.5c0-.167.031-.333.094-.5H2Zm7 13h5a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 18v-6h-1.75c-.354 0-.646-.125-.875-.375-.25-.23-.375-.52-.375-.875V9H9a.973.973 0 0 0-.719.281A.973.973 0 0 0 8 10v8c0 .292.094.531.281.719A.974.974 0 0 0 9 19Zm4-9.844v1.594c.02.146.104.23.25.25h1.594L13 9.156ZM14 20H9c-.563-.02-1.031-.219-1.406-.594S7.02 18.563 7 18v-8c.02-.563.219-1.031.594-1.406S8.437 8.02 9 8h3.625c.417 0 .77.146 1.063.438l1.874 1.874c.292.292.438.646.438 1.063V18c-.02.563-.219 1.031-.594 1.406S14.562 19.98 14 20Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteMdRegularIcon);
export default ForwardRef;
