import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 10.828a1.88 1.88 0 0 1 1.875 1.875v2.813h.234c.703 0 1.313.422 1.641.984.14-.047.281-.047.469-.047.656 0 1.265.422 1.593.938h.282a1.88 1.88 0 0 1 1.875 1.875v3.047a3.51 3.51 0 0 1-3.516 3.515H15.75c-.797 0-1.547-.234-2.25-.61l-.094-.046c-1.36-.797-2.156-2.25-2.156-3.844v-.281c0-.75.281-1.453.797-1.922l.61-.562c.14-.094.28-.235.468-.329v-5.53c0-1.032.797-1.876 1.875-1.876m-.469 1.875v8.203a.504.504 0 0 1-.469.469.47.47 0 0 1-.468-.469v-1.218l-.563.468c-.281.235-.375.516-.375.89v.282c0 1.078.563 2.11 1.5 2.625l.047.047a3.1 3.1 0 0 0 1.547.422h3.703c1.125 0 2.11-.938 2.11-2.11v-3.046a.504.504 0 0 0-.47-.47c-.14 0-.234.048-.327.095a.75.75 0 0 1-.703.093c-.235-.14-.375-.375-.375-.609a.47.47 0 0 0-.47-.469c-.187 0-.28.047-.374.14-.188.235-.516.376-.797.235-.281-.093-.469-.328-.469-.61v-.233a.47.47 0 0 0-.469-.47c-.187 0-.28.048-.375.141-.187.235-.515.375-.797.235a.66.66 0 0 1-.468-.657v-3.984a.504.504 0 0 0-.469-.469.47.47 0 0 0-.469.47m8.25 2.766 2.532-2.531c.28-.282.28-.704 0-.938L22.64 9.281a.78.78 0 0 0-.985 0 .78.78 0 0 0 0 .985l1.547 1.5h-4.547c-.375 0-.656.328-.656.703a.64.64 0 0 0 .656.656h4.547l-1.36 1.36a.68.68 0 0 0 0 .984c.282.234.704.234.938 0m-15.61 0-2.484-2.531c-.28-.282-.28-.704 0-.938L7.36 9.281c.282-.234.704-.234.938 0a.68.68 0 0 1 0 .985l-1.5 1.5h4.547c.375 0 .656.328.656.703a.64.64 0 0 1-.656.656H6.797l1.36 1.36a.78.78 0 0 1 0 .984.78.78 0 0 1-.985 0' />
    </g>
    <defs>
      <clipPath id='e8a2e37205a629993d994d8a2a03c43a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightXlBoldIcon);
export default ForwardRef;
