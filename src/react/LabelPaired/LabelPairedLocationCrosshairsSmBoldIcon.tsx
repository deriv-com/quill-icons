import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSmBoldIcon = (
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
      <path d='M7 3.75q.602.054.656.656v1.149Q9.461 5.8 10.72 7.03q1.23 1.258 1.504 3.063h1.12q.602.054.657.656-.055.602-.656.656h-1.121q-.274 1.804-1.504 3.063-1.258 1.23-3.063 1.504v1.12q-.054.602-.656.657-.602-.055-.656-.656v-1.121q-1.805-.274-3.063-1.504-1.23-1.259-1.476-3.063H.656Q.055 11.352 0 10.75q.054-.602.656-.656h1.149Q2.05 8.29 3.28 7.03q1.259-1.23 3.063-1.476V4.406q.054-.601.656-.656m-3.937 7q0 1.066.519 1.969.52.902 1.45 1.449.929.52 1.968.52 1.04 0 1.969-.52a3.95 3.95 0 0 0 1.449-1.45q.52-.9.52-1.968 0-1.066-.52-1.969a3.95 3.95 0 0 0-1.45-1.449A4 4 0 0 0 7 6.812q-1.04 0-1.969.52a3.95 3.95 0 0 0-1.449 1.45 3.9 3.9 0 0 0-.52 1.968m5.25 0q-.028-.738-.657-1.148a1.4 1.4 0 0 0-1.312 0q-.63.41-.657 1.148.028.738.657 1.148.656.33 1.312 0 .63-.41.657-1.148m-3.938 0q0-.71.355-1.312t.957-.958A2.63 2.63 0 0 1 7 8.125a2.63 2.63 0 0 1 2.27 1.313q.355.6.355 1.312 0 .711-.355 1.313-.356.6-.957.957A2.63 2.63 0 0 1 7 13.375a2.63 2.63 0 0 1-2.27-1.312 2.53 2.53 0 0 1-.355-1.313' />
    </g>
    <defs>
      <clipPath id='62e29e7b7695e42118408bc5d44f27d0__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSmBoldIcon);
export default ForwardRef;
