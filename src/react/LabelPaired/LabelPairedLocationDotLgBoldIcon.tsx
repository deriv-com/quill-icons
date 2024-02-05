import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 13q-.078-2.383-1.64-3.984Q9.882 7.453 7.5 7.375q-2.384.078-3.984 1.64Q1.953 10.618 1.875 13q0 .742.586 2.227.664 1.484 1.68 3.125a76 76 0 0 0 1.718 2.617A60 60 0 0 0 7.5 23.156a60 60 0 0 0 1.64-2.187 38 38 0 0 0 1.72-2.617 27 27 0 0 0 1.68-3.125q.585-1.485.585-2.227M15 13q-.078 1.758-1.25 4.063a39 39 0 0 1-2.734 4.453q-1.524 2.187-2.578 3.476-.39.47-.938.469-.547 0-.937-.469-1.055-1.29-2.579-3.476a39 39 0 0 1-2.734-4.453Q.078 14.758 0 13q.078-3.203 2.188-5.312T7.5 5.5q3.203.078 5.313 2.188T15 13m-6.25 0q0-.547-.352-.898-.35-.352-.898-.352-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898m-4.375 0q.039-1.758 1.563-2.695 1.562-.86 3.125 0 1.523.937 1.562 2.695-.04 1.758-1.562 2.695-1.563.86-3.126 0Q4.415 14.758 4.376 13' />
    </g>
    <defs>
      <clipPath id='141ab3dc6e2fbbcb693399715885a41f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotLgBoldIcon);
export default ForwardRef;
