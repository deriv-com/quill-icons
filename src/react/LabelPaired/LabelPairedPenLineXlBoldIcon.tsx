import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.61 26.578 1.078-3.656a4 4 0 0 1 1.078-1.735l14.25-14.296a2.96 2.96 0 0 1 2.109-.844q1.171 0 2.11.844l1.874 1.875q.188.187.375.468a3 3 0 0 1 .47 1.922q-.095 1.032-.845 1.828L8.86 27.234l-.187.188q-.703.61-1.594.89l-3.656 1.079-1.969.562q-.656.187-1.125-.281-.422-.47-.281-1.125zm2.953-1.922-.797 2.578 2.578-.75 1.125-.328q.422-.14.797-.468l10.687-10.735-2.906-2.906L4.359 22.734q-.046.048-.093.094a2.3 2.3 0 0 0-.422.703zm8.062 3.094h14.25q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-14.25q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='52c7bd178e149490dd8e079b6c632fee__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineXlBoldIcon);
export default ForwardRef;
