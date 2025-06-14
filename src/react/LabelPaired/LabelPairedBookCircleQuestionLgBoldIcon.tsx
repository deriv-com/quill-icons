import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.938A3.443 3.443 0 0 1 3.438 5.5h11.875c1.171 0 2.187 1.016 2.187 2.188v5.585c-.703.196-1.328.47-1.875.86V7.688a.336.336 0 0 0-.312-.313H3.438c-.899 0-1.563.703-1.563 1.563v10.585a3.1 3.1 0 0 1 1.25-.273H12.5v.625c0 .43.04.86.078 1.25H3.125c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25h10.469c.469.742 1.094 1.406 1.797 1.875H3.125C1.367 25.5 0 24.133 0 22.375V8.938m5 1.874c0-.507.39-.937.938-.937h6.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H5.937c-.546 0-.937-.39-.937-.937m0 3.126c0-.508.39-.938.938-.938h6.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H5.937c-.546 0-.937-.39-.937-.937m8.75 5.937c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m3.125-1.797v.235c0 .351.273.625.625.625a.64.64 0 0 0 .625-.625v-.235c0-.195.156-.39.352-.39h1.601c.274 0 .547.273.547.546 0 .235-.117.391-.312.508l-1.25.625a.69.69 0 0 0-.313.586v.547c0 .352.273.625.625.625A.64.64 0 0 0 20 20.5v-.195l.898-.47c.586-.312.977-.937.977-1.6 0-.977-.82-1.758-1.797-1.758h-1.601c-.899 0-1.602.703-1.602 1.601m1.563 4.61c0 .546.39.937.937.937.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938.925.925 0 0 0-.937.938' />
    </g>
    <defs>
      <clipPath id='7e959c2cc92347de9bec132cf6ba26b5__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionLgBoldIcon);
export default ForwardRef;
