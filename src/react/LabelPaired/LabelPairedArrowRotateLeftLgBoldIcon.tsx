import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 14.25c-.547 0-.938-.39-.938-.937V7.687c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v3.164l.781-.938C4.883 8 7.266 6.75 10 6.75c4.805 0 8.75 3.945 8.75 8.75 0 4.844-3.945 8.75-8.75 8.75a8.8 8.8 0 0 1-5.273-1.719c-.391-.312-.508-.898-.196-1.328a.94.94 0 0 1 1.328-.195A6.84 6.84 0 0 0 10 22.375a6.86 6.86 0 0 0 6.875-6.875c0-3.79-3.086-6.875-6.875-6.875-2.148 0-4.023.977-5.312 2.5l-1.055 1.25h3.555a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937z' />
    </g>
    <defs>
      <clipPath id='8a15e8febb1bbc498daf7ccc969d98ee__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftLgBoldIcon);
export default ForwardRef;
