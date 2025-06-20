import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskSmBoldIcon = (
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
      <path d='M1.688 6.375v8.75c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-6.7a.44.44 0 0 0-.137-.3l.93-.93c.328.328.492.766.492 1.23v6.7c0 .984-.766 1.75-1.75 1.75H2.125c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h6.7c.464 0 .902.191 1.23.52l2.05 2.05-.93.93-2.05-2.05v-.028V8.78c0 .383-.3.656-.656.656h-5.25a.63.63 0 0 1-.656-.656V5.937h-.438a.45.45 0 0 0-.437.438m2.187-.437v2.187h3.938V5.938zM4.75 12.5c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504 0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0A1.78 1.78 0 0 1 4.75 12.5' />
    </g>
    <defs>
      <clipPath id='e7fb66b35c616540cd176d7d633fdfcb__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskSmBoldIcon);
export default ForwardRef;
