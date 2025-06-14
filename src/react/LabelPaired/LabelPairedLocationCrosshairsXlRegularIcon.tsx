import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsXlRegularIcon = (
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
      <path d='M12 6c.375 0 .75.375.75.75v2.297a9.02 9.02 0 0 1 8.203 8.203h2.297c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.297c-.375 4.406-3.844 7.875-8.203 8.25v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V27A9.03 9.03 0 0 1 3 18.75H.75A.74.74 0 0 1 0 18c0-.375.328-.75.75-.75H3c.375-4.36 3.844-7.828 8.25-8.203V6.75c0-.375.328-.75.75-.75M4.5 18a7.46 7.46 0 0 0 3.75 6.516c2.297 1.359 5.156 1.359 7.5 0 2.297-1.36 3.75-3.797 3.75-6.516 0-2.672-1.453-5.11-3.75-6.469-2.344-1.36-5.203-1.36-7.5 0C5.906 12.891 4.5 15.328 4.5 18M15 18c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0C9.563 15.984 9 16.969 9 18c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625m-7.5 0c0-1.594.844-3.047 2.25-3.89 1.36-.797 3.094-.797 4.5 0 1.36.843 2.25 2.296 2.25 3.89 0 1.64-.89 3.094-2.25 3.938-1.406.796-3.14.796-4.5 0C8.344 21.094 7.5 19.64 7.5 18' />
    </g>
    <defs>
      <clipPath id='00c7789131b36f5c0a0ccd80cf44060f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsXlRegularIcon);
export default ForwardRef;
