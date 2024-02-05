import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.781 4.625h.438q.601.054.656.656-.054.601-.656.657H2.78q-.465 0-.765.328a1 1 0 0 0-.328.765v.438q-.055.601-.657.656-.601-.054-.656-.656V7.03q.027-1.012.71-1.695.685-.684 1.696-.711M1.031 9q.602.054.657.656v2.188q-.055.601-.657.656-.601-.055-.656-.656V9.656q.054-.601.656-.656M11.97 9q.601.054.656.656v2.188q-.055.601-.656.656-.602-.055-.656-.656V9.656q.054-.601.656-.656m0-.875q-.602-.054-.656-.656V7.03q0-.465-.329-.765a1 1 0 0 0-.765-.328H9.78q-.601-.056-.656-.657.054-.601.656-.656h.438q1.012.027 1.695.71.684.685.711 1.696v.438q-.055.601-.656.656m.656 5.906v.438q-.027 1.012-.71 1.695-.685.684-1.696.711H9.78q-.601-.055-.656-.656.054-.602.656-.657h.438q.465 0 .765-.328a1 1 0 0 0 .329-.765v-.438q.054-.601.656-.656.601.055.656.656m-10.937 0v.438q0 .465.328.765.3.33.765.329h.438q.601.054.656.656-.054.601-.656.656H2.78q-1.012-.027-1.695-.71-.684-.685-.711-1.696v-.438q.054-.601.656-.656.602.055.657.656m3.718 2.844q-.601-.055-.656-.656.054-.602.656-.657h2.188q.601.056.656.657-.054.601-.656.656zM4.75 5.281q.054-.601.656-.656h2.188q.601.054.656.656-.054.601-.656.657H5.406q-.601-.056-.656-.657' />
    </g>
    <defs>
      <clipPath id='24426a1d1009e62abbfa104e8acd5a56__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderSmBoldIcon);
export default ForwardRef;
