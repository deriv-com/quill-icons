import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 10.406q0-.609.422-.984.375-.422.984-.422.47 0 .844.281l10.781 7.828q.47.33.469.891 0 .563-.469.89L12.75 26.72q-.375.28-.844.281-.609 0-.984-.422-.422-.375-.422-.984v-4.64l-8.297 5.812Q1.83 27 1.406 27q-.609 0-.984-.422Q0 26.203 0 25.594V10.406q0-.609.422-.984Q.797 9 1.406 9q.469 0 .797.234l8.297 5.813zm0 7.406-8.25-5.765V24l8.25-5.812zM20.953 18l-8.203-5.953v11.906z' />
    </g>
    <defs>
      <clipPath id='0c962efd7c5b73d7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlBoldIcon);
export default ForwardRef;
