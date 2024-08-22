import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m20.914 20.227-3.75 3.75c-.39.39-.977.39-1.328 0l-3.75-3.75a.856.856 0 0 1 0-1.29c.351-.39.937-.39 1.328 0l2.149 2.149V7.688c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938v13.398l2.148-2.148c.352-.391.937-.391 1.328 0a.92.92 0 0 1 0 1.289M7.164 7.023l3.711 3.75c.39.391.39.977 0 1.329-.352.39-.937.39-1.328 0L7.398 9.953v13.36c0 .546-.39.937-.937.937a.925.925 0 0 1-.938-.937V9.953l-2.148 2.149a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l3.75-3.75c.353-.351.938-.351 1.33 0' />
    </g>
    <defs>
      <clipPath id='1fb6efb68dec129f1378880bc58fc85a__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownLgBoldIcon);
export default ForwardRef;
