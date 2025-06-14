import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighXlBoldIcon = (
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
      <path d='M24.984 7.547C28.031 10.03 30 13.78 30 18c0 4.266-1.969 8.016-5.016 10.5a1.17 1.17 0 0 1-1.593-.14c-.375-.516-.282-1.22.187-1.594A11.27 11.27 0 0 0 27.75 18c0-3.516-1.64-6.656-4.172-8.719-.469-.375-.562-1.078-.187-1.594a1.17 1.17 0 0 1 1.593-.14m-2.812 3.469v.046c2.015 1.641 3.328 4.126 3.328 6.985 0 2.812-1.312 5.297-3.328 6.984-.516.375-1.219.282-1.594-.187a1.17 1.17 0 0 1 .14-1.594A6.62 6.62 0 0 0 23.25 18a6.6 6.6 0 0 0-2.531-5.203c-.469-.422-.563-1.125-.14-1.594.374-.469 1.077-.562 1.593-.187m-2.86 3.515C20.345 15.375 21 16.594 21 18c0 1.453-.656 2.672-1.687 3.516a1.17 1.17 0 0 1-1.594-.141c-.375-.516-.282-1.219.187-1.594A2.32 2.32 0 0 0 18.75 18c0-.703-.328-1.312-.844-1.734-.468-.375-.562-1.078-.187-1.594a1.17 1.17 0 0 1 1.593-.14m-11.859.938a1.03 1.03 0 0 1-.703.281H2.625a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375H6.75c.234 0 .516.14.703.328l5.297 4.64v-14.39zm6.14-7.969c.75 0 1.407.656 1.407 1.406v18.235c0 .75-.656 1.359-1.406 1.359-.375 0-.703-.094-.938-.328L6.281 22.5H2.625A2.62 2.62 0 0 1 0 19.875v-3.75C0 14.719 1.172 13.5 2.625 13.5h3.656l6.375-5.625a1.3 1.3 0 0 1 .938-.375' />
    </g>
    <defs>
      <clipPath id='7154c153e30a429c4540ef1a14579354__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighXlBoldIcon);
export default ForwardRef;
