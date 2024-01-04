import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedStarMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 4c.313.02.542.167.688.438l2.124 4.406 4.782.687c.312.063.52.24.625.531a.714.714 0 0 1-.188.75l-3.468 3.438.812 4.875c.042.292-.063.542-.313.75a.71.71 0 0 1-.78.031L9 17.625l-4.281 2.281c-.271.146-.532.125-.782-.062-.25-.188-.354-.427-.312-.719l.813-4.875-3.47-3.438a.714.714 0 0 1-.187-.75.783.783 0 0 1 .625-.53l4.782-.688 2.125-4.406A.793.793 0 0 1 9 4Zm0 2.469L7.344 9.844c-.104.229-.292.375-.563.437l-3.687.531L5.78 13.47c.167.187.24.406.219.656l-.656 3.75 3.312-1.75a.677.677 0 0 1 .688 0l3.281 1.75-.625-3.75a.716.716 0 0 1 .219-.656l2.687-2.656-3.687-.532c-.271-.062-.459-.208-.563-.437L9 6.469Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdBoldIcon);
export default ForwardRef;
