import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookXlIcon = (
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
      <path d='M24 18c0 6.14-4.64 11.203-10.547 11.953v-8.25h3.235L17.344 18h-3.89v-1.266c0-1.968.75-2.718 2.718-2.718.61 0 1.078.046 1.36.046v-3.28c-.516-.188-1.829-.329-2.579-.329-4.031 0-5.86 1.922-5.86 6V18H6.61v3.703h2.485v7.969A12.02 12.02 0 0 1 0 18C0 11.39 5.344 6 12 6c6.61 0 12 5.39 12 12' />
    </g>
    <defs>
      <clipPath id='091a24b1127b52cff4ffe506feb4d816__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookXlIcon);
export default ForwardRef;
