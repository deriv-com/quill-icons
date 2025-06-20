import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.688 12.094c.5-.75.812-1.625.812-2.594C10.5 7.031 8.469 5 6 5 3.5 5 1.5 7.031 1.5 9.5c0 .969.281 1.844.781 2.594.125.156.281.375.438.594.406.53.844 1.156 1.187 1.78.281.5.438 1.032.5 1.563h-1c-.094-.375-.187-.75-.375-1.093a13.5 13.5 0 0 0-1.094-1.626l-.468-.656A5.47 5.47 0 0 1 .5 9.5C.5 6.469 2.938 4 6 4c3.031 0 5.5 2.469 5.5 5.5 0 1.188-.375 2.25-1 3.156l-.469.656a13.5 13.5 0 0 0-1.094 1.626c-.187.343-.28.687-.374 1.062h-1c.093-.5.218-1.031.5-1.531.343-.625.812-1.25 1.187-1.813.156-.187.313-.406.438-.594zM6 7a2.487 2.487 0 0 0-2.5 2.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5C2.5 7.594 4.063 6 6 6c.25 0 .5.25.5.5 0 .281-.25.5-.5.5M4.563 18c.218.594.78 1 1.437 1 .625 0 1.188-.406 1.406-1zM3.5 17.5v-.156c0-.188.125-.344.313-.344h4.343c.188 0 .344.156.344.344v.156C8.5 18.906 7.375 20 6 20a2.47 2.47 0 0 1-2.5-2.5' />
    </g>
    <defs>
      <clipPath id='f29bbf53e3dd6809bca46e92cebb0221__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbMdRegularIcon);
export default ForwardRef;
