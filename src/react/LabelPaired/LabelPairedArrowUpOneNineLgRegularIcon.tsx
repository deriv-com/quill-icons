import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineLgRegularIcon = (
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
      <path d='M17.75 7.375V13H19c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.25V8.273l-1.055.352c-.351.078-.703-.078-.82-.43a.65.65 0 0 1 .43-.78l1.875-.626c.156-.039.39-.039.547.078a.67.67 0 0 1 .273.508m-10.82-.43 3.75 3.75a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L7.125 8.898v14.727a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.898L3.18 11.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.75-3.75a.66.66 0 0 1 .899 0m10.039 13.868c.703 0 1.367-.352 1.758-1.016.351-.625.351-1.367 0-2.031-.391-.625-1.055-1.016-1.758-1.016-.742 0-1.407.39-1.797 1.016-.352.664-.352 1.406 0 2.03.39.665 1.055 1.017 1.797 1.017m-3.282-2.032A3.276 3.276 0 0 1 16.97 15.5a3.3 3.3 0 0 1 3.281 3.281c0 .078 0 .117-.04.157h.04c0 .859-.312 1.64-.86 2.265l-2.421 2.852c-.235.273-.625.273-.899.078-.273-.235-.273-.625-.078-.899l1.016-1.172h-.04a3.25 3.25 0 0 1-3.28-3.28' />
    </g>
    <defs>
      <clipPath id='dc20d75f98624f8ddcc0496dc3c4e4bd__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineLgRegularIcon);
export default ForwardRef;
