import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinSmRegularIcon = (
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
      <path d='M7 4.625a6.11 6.11 0 0 0-5.305 3.063c-1.12 1.914-1.12 4.238 0 6.125C2.79 15.727 4.785 16.875 7 16.875a6.04 6.04 0 0 0 5.277-3.062c1.121-1.887 1.121-4.211 0-6.126A6.1 6.1 0 0 0 7 4.626M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m.656-11.375c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656m-1.531 7c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875A.9.9 0 0 0 7 12.5a.88.88 0 0 0-.875.875m2.625 0-.027.027c0 .957-.766 1.75-1.75 1.75-.957 0-1.75-.793-1.75-1.75 0-.191.027-.355.082-.52l-2.926-1.75a.433.433 0 0 1-.137-.6.433.433 0 0 1 .602-.137l2.926 1.75c.3-.329.738-.52 1.23-.52.957 0 1.75.793 1.75 1.75M4.594 7.688c0 .382-.301.656-.657.656a.63.63 0 0 1-.656-.656c0-.356.274-.657.656-.657.356 0 .657.301.657.657m6.781 3.718a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656m-.656-3.719c0 .383-.301.657-.656.657a.63.63 0 0 1-.657-.656c0-.356.274-.657.656-.657.356 0 .657.301.657.657' />
    </g>
    <defs>
      <clipPath id='8d91a33d031862607976f12b01cc80cd__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinSmRegularIcon);
export default ForwardRef;
