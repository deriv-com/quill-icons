import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightMdFillIcon = (
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
      <path d='M8 4a.76.76 0 0 1 .75.75v2A.74.74 0 0 1 8 7.5a.72.72 0 0 1-.75-.75v-2A.74.74 0 0 1 8 4m0 12.5a.76.76 0 0 1 .75.75v2A.74.74 0 0 1 8 20a.72.72 0 0 1-.75-.75v-2A.74.74 0 0 1 8 16.5m7.25-3.75h-2a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2A.76.76 0 0 1 16 12a.74.74 0 0 1-.75.75M3.5 12a.74.74 0 0 1-.75.75h-2A.72.72 0 0 1 0 12a.74.74 0 0 1 .75-.75h2a.76.76 0 0 1 .75.75m10.156-4.594L12.22 8.844c-.281.281-.75.281-1.063 0-.281-.313-.281-.781 0-1.063l1.438-1.437c.281-.282.75-.282 1.062 0 .281.312.281.781 0 1.062m-8.843 7.782c.28.312.28.78 0 1.062l-1.438 1.406a.684.684 0 0 1-1.031 0 .684.684 0 0 1 0-1.031l1.406-1.437c.281-.282.75-.282 1.063 0m7.78 2.468-1.437-1.406c-.281-.281-.281-.75 0-1.062.313-.282.781-.282 1.063 0l1.437 1.437a.736.736 0 0 1 0 1.031c-.312.313-.781.313-1.062 0m-7.78-8.812c-.313.281-.782.281-1.063 0L2.344 7.406c-.313-.281-.313-.75 0-1.062a.736.736 0 0 1 1.031 0L4.813 7.78c.28.282.28.75 0 1.063M8 15.5a3.44 3.44 0 0 1-3.031-1.75c-.657-1.062-.657-2.406 0-3.5A3.5 3.5 0 0 1 8 8.5c1.25 0 2.375.688 3 1.75.656 1.094.656 2.438 0 3.5a3.43 3.43 0 0 1-3 1.75' />
    </g>
    <defs>
      <clipPath id='f0e7e4e368daf183a49f1d558603d5fa__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightMdFillIcon);
export default ForwardRef;
