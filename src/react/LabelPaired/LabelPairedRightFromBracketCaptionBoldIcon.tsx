import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 6.945v1.242a.555.555 0 0 1-.562.563H4.874v1.5h2.813a.57.57 0 0 1 .562.563v1.265L10.828 9.5zM12 9.5c0 .281-.117.54-.305.727l-2.718 2.718a1.08 1.08 0 0 1-.774.305 1.06 1.06 0 0 1-1.078-1.078v-.797h-2.25A1.11 1.11 0 0 1 3.75 10.25v-1.5c0-.61.492-1.125 1.125-1.125h2.25v-.773c0-.61.469-1.102 1.078-1.102.281 0 .563.117.774.328l2.718 2.719c.188.187.305.445.305.703M3.938 5.375H2.062a.925.925 0 0 0-.937.938v6.375c0 .539.398.937.938.937h1.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H2.062A2.05 2.05 0 0 1 0 12.688V6.312C0 5.188.914 4.25 2.063 4.25h1.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562' />
    </g>
    <defs>
      <clipPath id='a0511417b1f12fd5d76fd56258ff01e4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketCaptionBoldIcon);
export default ForwardRef;
