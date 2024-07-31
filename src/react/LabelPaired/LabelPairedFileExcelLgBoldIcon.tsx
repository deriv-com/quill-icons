import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelLgBoldIcon = (
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
      <path d='M1.875 23c0 .352.273.625.625.625h10a.64.64 0 0 0 .625-.625V11.75H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8zM2.5 5.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m3.516 9.14L7.5 16.478l1.445-1.836a.9.9 0 0 1 1.29-.196c.43.352.507.938.156 1.328L8.67 18l1.759 2.266a.9.9 0 0 1-.196 1.289c-.39.312-.976.273-1.289-.157L7.5 19.563l-1.445 1.835c-.352.43-.938.508-1.328.157-.43-.313-.47-.899-.157-1.29L6.29 18l-1.72-2.227c-.351-.39-.273-.976.157-1.289.39-.351.976-.273 1.289.157' />
    </g>
    <defs>
      <clipPath id='170f4fe674be253f858cab1b075f7177__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelLgBoldIcon);
export default ForwardRef;
