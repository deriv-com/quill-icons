import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 9.25c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5zM4 16.75c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m1.25-5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25M4 20.5c.664 0 1.25-.547 1.25-1.25C5.25 18.586 4.664 18 4 18c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m3.75-9.687a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H14c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937zm0 3.75a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H14c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937zm0 3.75a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H14c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937z' />
    </g>
    <defs>
      <clipPath id='e6d233affc6cb9ef0e43e9c4b06ff2bb__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListLgFillIcon);
export default ForwardRef;
