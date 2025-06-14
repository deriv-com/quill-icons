import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighXlRegularIcon = (
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
      <path d='M7.078 14.813A.67.67 0 0 1 6.61 15H2.625A1.11 1.11 0 0 0 1.5 16.125v3.75c0 .656.469 1.125 1.125 1.125h3.984c.141 0 .329.094.47.188l6.421 5.718V9.141zM13.594 7.5c.75 0 1.406.656 1.406 1.406v18.235c0 .75-.656 1.359-1.406 1.359-.375 0-.703-.094-.938-.328l.516-.563-.516.563L6.281 22.5H2.625A2.62 2.62 0 0 1 0 19.875v-3.75C0 14.719 1.172 13.5 2.625 13.5h3.656l6.375-5.625a1.3 1.3 0 0 1 .938-.375m5.578 6.938C20.25 15.234 21 16.547 21 18c0 1.5-.75 2.813-1.828 3.61-.328.28-.797.187-1.031-.141-.282-.328-.188-.797.14-1.032A3.04 3.04 0 0 0 19.5 18c0-.937-.469-1.828-1.219-2.39-.328-.235-.422-.704-.14-1.032.234-.328.703-.422 1.03-.14m1.969-3.282a.85.85 0 0 1 1.078-.094C24.187 12.75 25.5 15.235 25.5 18c0 2.813-1.312 5.297-3.281 6.938a.753.753 0 0 1-1.078-.094c-.235-.282-.188-.797.093-1.032A7.46 7.46 0 0 0 24 18a7.43 7.43 0 0 0-2.766-5.766c-.328-.28-.328-.75-.093-1.078m4.078-3.422C28.125 10.22 30 13.875 30 18s-1.875 7.828-4.781 10.313a.753.753 0 0 1-1.078-.094c-.282-.328-.235-.797.093-1.032A12.03 12.03 0 0 0 28.454 18c0-3.656-1.642-6.937-4.22-9.14-.328-.282-.375-.75-.093-1.032a.753.753 0 0 1 1.078-.094' />
    </g>
    <defs>
      <clipPath id='699ac1ffe8ec952f59da5b0474f4b362__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighXlRegularIcon);
export default ForwardRef;
