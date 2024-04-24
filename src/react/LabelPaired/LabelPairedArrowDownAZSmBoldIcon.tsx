import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.41 14.059c-.273-.246-.273-.657 0-.93.246-.246.656-.246.93 0l1.504 1.531V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656v9.38l1.504-1.505a.6.6 0 0 1 .902 0 .6.6 0 0 1 0 .903l-2.625 2.625a.6.6 0 0 1-.902 0zm8.34-2.434h3.5c.246 0 .492.164.574.41a.59.59 0 0 1-.11.684L11.2 15.563h2.051c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-3.5c-.273 0-.52-.137-.602-.383a.59.59 0 0 1 .11-.683l2.515-2.871H9.75a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656m1.75-7c.246 0 .465.164.574.383l2.188 4.375a.647.647 0 0 1-.301.875.647.647 0 0 1-.875-.301l-.383-.738h-2.46l-.356.738a.647.647 0 0 1-.875.3.647.647 0 0 1-.301-.874l2.187-4.375a.67.67 0 0 1 .602-.383m-.602 3.281h1.176L11.5 6.758z' />
    </g>
    <defs>
      <clipPath id='d00c3eb3b8d34d0ccd5e47df85945e77__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZSmBoldIcon);
export default ForwardRef;
