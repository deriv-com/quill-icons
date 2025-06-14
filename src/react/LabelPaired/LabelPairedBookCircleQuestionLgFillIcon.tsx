import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionLgFillIcon = (
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
      <path d='M0 9.25C0 7.18 1.68 5.5 3.75 5.5h12.5c.664 0 1.25.586 1.25 1.25v6.523c-2.89.82-5 3.477-5 6.602v.625H3.75c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25h9.492a6.7 6.7 0 0 0 2.149 2.5H3.75C1.68 25.5 0 23.82 0 21.75zm5 1.875c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-7.5a.64.64 0 0 0-.625.625m0 2.5c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-7.5a.64.64 0 0 0-.625.625m8.75 6.25c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m3.125-1.797v.235c0 .351.273.625.625.625a.64.64 0 0 0 .625-.625v-.235c0-.195.156-.39.352-.39h1.601c.274 0 .547.273.547.546 0 .235-.117.391-.312.508l-1.25.625a.69.69 0 0 0-.313.586v.547c0 .352.273.625.625.625A.64.64 0 0 0 20 20.5v-.195l.898-.47c.586-.312.977-.937.977-1.6 0-.977-.82-1.758-1.797-1.758h-1.601c-.899 0-1.602.703-1.602 1.601m1.563 4.61c0 .546.39.937.937.937.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938.925.925 0 0 0-.937.938' />
    </g>
    <defs>
      <clipPath id='45c0a6486421a54c96ead6c3d44a4286__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionLgFillIcon);
export default ForwardRef;
