import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 6q1.032.095 1.125 1.125v1.313l3.984-.985q2.766-.656 5.344.563A7.4 7.4 0 0 0 15 8.859q1.782 0 3.469-.843l.422-.188q.796-.375 1.406.047.656.375.703 1.219v13.125q-.047.984-.984 1.406l-1.594.61q-3.422 1.218-6.656-.376Q9 22.547 6 23.25l-3.75.938v4.687Q2.157 29.907 1.125 30 .095 29.907 0 28.875V7.125Q.095 6.095 1.125 6m1.125 7.078L6 12.234v-2.39l-3.75.937zm0 2.297v2.203L6 16.734v-2.156zm0 4.5v2.016l3.234-.844Q5.72 21 6 20.953v-1.875zm6 .89a10.8 10.8 0 0 1 4.5 1.079v-2.297l-2.578-.797a4.4 4.4 0 0 0-1.922-.14zM15 22.5a6.4 6.4 0 0 0 2.625-.375l1.125-.422V19.5l-1.219.281A8.7 8.7 0 0 1 15 19.97zm3.75-5.297V15l-1.219.281A8.7 8.7 0 0 1 15 15.47v2.25a6.6 6.6 0 0 0 2.063-.14zm0-4.5V10.36q-1.829.75-3.75.75v2.11a6.6 6.6 0 0 0 2.063-.14zm-6-1.875a8.5 8.5 0 0 1-2.203-.797A5.8 5.8 0 0 0 8.25 9.47v2.344a8.5 8.5 0 0 1 2.531.28l1.969.61zm0 4.219-2.578-.797a4.4 4.4 0 0 0-1.922-.14v2.25a7.6 7.6 0 0 1 2.531.234l1.969.61z' />
    </g>
    <defs>
      <clipPath id='5cafa875069b7511fa0a4aae240ab8e6__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredXlBoldIcon);
export default ForwardRef;
