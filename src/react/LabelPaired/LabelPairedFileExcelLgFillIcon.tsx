import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelLgFillIcon = (
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
      <path d='M2.5 5.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zm-3.945 9.805a.897.897 0 0 0-1.29-.235.897.897 0 0 0-.234 1.29l1.797 2.578-1.797 2.617c-.312.39-.195.976.235 1.289a.897.897 0 0 0 1.289-.235L7.5 20.58l1.406 2.03c.313.43.86.547 1.29.235.429-.313.546-.86.234-1.29l-1.797-2.616 1.797-2.579a.897.897 0 0 0-.235-1.289.897.897 0 0 0-1.289.235L7.5 17.335z' />
    </g>
    <defs>
      <clipPath id='940486f291e1a5088991155f66ee703f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelLgFillIcon);
export default ForwardRef;
