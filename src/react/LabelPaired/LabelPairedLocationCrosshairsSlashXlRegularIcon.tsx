import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashXlRegularIcon = (
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
      <path d='m18.516 24.656 1.265.985c-1.172.75-2.578 1.218-4.031 1.359v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V27A9.03 9.03 0 0 1 6 18.75H3.75A.74.74 0 0 1 3 18c0-.375.328-.75.75-.75H6c.094-.75.234-1.453.469-2.156l1.265 1.031c-.187.61-.234 1.219-.234 1.875 0 4.172 3.328 7.5 7.5 7.5 1.266 0 2.484-.281 3.516-.844M14.25 9.046V6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v2.297a9.02 9.02 0 0 1 8.203 8.203h2.297c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.297c-.047.75-.234 1.5-.469 2.156l-1.265-.984c.187-.61.281-1.266.281-1.922 0-4.125-3.375-7.5-7.5-7.5a7.6 7.6 0 0 0-3.562.89l-1.266-.984a9.36 9.36 0 0 1 4.078-1.36M15 22.5c-2.39 0-4.36-1.828-4.5-4.219l2.578 2.063.047.047 2.625 2.062c-.234.047-.516.047-.75.047m-.797-8.906c.235-.047.516-.094.797-.094 2.39 0 4.313 1.875 4.453 4.266l-2.578-2.063-.047-.047zM1.172 6.188l28.547 22.5c.281.234.375.75.093 1.03-.234.329-.703.423-1.03.141L.281 7.36c-.329-.234-.423-.75-.141-1.03.234-.329.75-.423 1.03-.141' />
    </g>
    <defs>
      <clipPath id='7cb3a698804ca29bf820ab9e54b4db00__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashXlRegularIcon);
export default ForwardRef;
