import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraXlRegularIcon = (
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
      <path d='M8.953 7.5H15c.984 0 1.828.656 2.156 1.547l.469 1.453H21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-12c0-1.64 1.313-3 3-3h3.328l.469-1.453C7.125 8.157 7.969 7.5 8.953 7.5m-.75 2.016-.656 2.015c-.094.281-.375.469-.703.469H3c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5v-12c0-.797-.703-1.5-1.5-1.5h-3.89c-.329 0-.61-.187-.704-.516l-.656-1.968C15.61 9.234 15.328 9 15 9H8.953c-.328 0-.61.234-.75.516M12 24.75c-1.922 0-3.61-.984-4.547-2.625-.984-1.594-.984-3.61 0-5.25.938-1.594 2.625-2.625 4.547-2.625 1.875 0 3.563 1.031 4.5 2.625.984 1.64.984 3.656 0 5.25-.937 1.64-2.625 2.625-4.5 2.625M8.25 19.5c0 1.36.703 2.578 1.875 3.281 1.125.657 2.578.657 3.75 0C15 22.078 15.75 20.86 15.75 19.5c0-1.312-.75-2.531-1.875-3.234-1.172-.657-2.625-.657-3.75 0-1.172.703-1.875 1.922-1.875 3.234' />
    </g>
    <defs>
      <clipPath id='1cf621ef751cbbf9bd7a99dcde63aa79__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraXlRegularIcon);
export default ForwardRef;
