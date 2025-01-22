import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.75 4.75v2A.74.74 0 0 1 8 7.5a.72.72 0 0 1-.75-.75v-2A.74.74 0 0 1 8 4a.76.76 0 0 1 .75.75m4.906 2.656L12.22 8.844c-.281.281-.75.281-1.063 0-.281-.313-.281-.781 0-1.063l1.438-1.437c.281-.282.75-.282 1.062 0 .281.312.281.781 0 1.062M3.375 6.344 4.813 7.78c.28.282.28.75 0 1.063-.313.281-.782.281-1.063 0L2.344 7.406c-.313-.281-.313-.75 0-1.062a.736.736 0 0 1 1.031 0M.75 11.25h2a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2A.72.72 0 0 1 0 12a.74.74 0 0 1 .75-.75m12.5 0h2A.76.76 0 0 1 16 12a.74.74 0 0 1-.75.75h-2a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m-8.437 5-1.438 1.406a.684.684 0 0 1-1.031 0 .684.684 0 0 1 0-1.031l1.406-1.437c.281-.282.75-.282 1.063 0 .28.312.28.78 0 1.062m7.406-1.062 1.437 1.437a.736.736 0 0 1 0 1.031c-.312.313-.781.313-1.062 0l-1.438-1.406c-.281-.281-.281-.75 0-1.062.313-.282.781-.282 1.063 0M8.75 17.25v2A.74.74 0 0 1 8 20a.72.72 0 0 1-.75-.75v-2A.74.74 0 0 1 8 16.5a.76.76 0 0 1 .75.75M10 12c0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 6 12c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75m-5.5 0c0-1.25.656-2.375 1.75-3 1.063-.656 2.406-.656 3.5 0 1.063.625 1.75 1.75 1.75 3a3.5 3.5 0 0 1-1.75 3.031c-1.094.656-2.437.656-3.5 0A3.44 3.44 0 0 1 4.5 12' />
    </g>
    <defs>
      <clipPath id='a4df65ac430c878eb7c43f4adde8b3af__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightMdBoldIcon);
export default ForwardRef;
