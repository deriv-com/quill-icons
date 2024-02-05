import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.438 4.625h-5.25q-.411.027-.438.438v.875q.027.41.438.437h5.25q.41-.027.437-.437v-.875q-.027-.411-.437-.438m-5.25-.875h5.25q.546.027.93.383.355.383.382.93v.875a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H5.25v.875h6.344q.684 0 1.148.438.492.41.602 1.066l.629 4.512q.027.109.027.246V16q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16v-1.75q0-.055.027-.11l.63-4.511q.109-.657.6-1.066.466-.438 1.15-.438h1.968V7.25H2.188a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93v-.875q.027-.546.383-.93.382-.354.93-.382M.875 16q0 .383.246.629a.85.85 0 0 0 .629.246h10.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-.875H.875zm11.594-6.234q-.137-.712-.848-.766H2.406q-.738.054-.875.766L.875 14.25h12.25zm-9.406.328q.601.054.656.656-.055.602-.656.656-.602-.054-.657-.656.055-.602.656-.656m1.968.656q.055-.602.657-.656.601.054.656.656-.055.602-.657.656-.601-.054-.656-.656m-.656 1.531q.602.055.656.656-.054.602-.656.657-.602-.055-.656-.656.054-.602.656-.657m3.281-1.531q.055-.602.657-.656.601.054.656.656-.055.602-.656.656-.602-.054-.657-.656M7 12.281q.602.055.656.656-.054.602-.656.657-.602-.055-.656-.656.054-.602.656-.657m3.281-1.531q.055-.602.656-.656.602.054.657.656-.055.602-.656.656-.602-.054-.657-.656m-.656 1.531q.602.055.656.656-.054.602-.656.657-.602-.055-.656-.656.054-.602.656-.657' />
    </g>
    <defs>
      <clipPath id='debff0ca51ba3b6552bbbc8ced7238db__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterSmRegularIcon);
export default ForwardRef;
