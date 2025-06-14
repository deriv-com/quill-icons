import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteXlRegularIcon = (
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
      <path d='M6.375 8.438C6.328 8.766 6 9 5.625 9H5.25c-.422 0-.75.375-.75.75v.75h6v-.75c0-.375-.375-.75-.75-.75h-.422a.76.76 0 0 1-.75-.562C8.484 7.922 8.016 7.5 7.5 7.5c-.562 0-1.031.422-1.125.938M7.5 6c1.031 0 1.922.656 2.344 1.5H12c1.64 0 3 1.36 3 3h-1.5c0-.797-.703-1.5-1.5-1.5h-.14c.093.234.14.516.14.75v.844A3.67 3.67 0 0 0 9.75 12H4.5A1.48 1.48 0 0 1 3 10.5v-.75c0-.234.047-.516.094-.75H3c-.844 0-1.5.703-1.5 1.5V24c0 .844.656 1.5 1.5 1.5h6V27H3c-1.687 0-3-1.312-3-3V10.5c0-1.64 1.313-3 3-3h2.11C5.53 6.656 6.421 6 7.5 6M21 28.5c.797 0 1.5-.656 1.5-1.5v-9.562a.75.75 0 0 0-.234-.516l-3.188-3.188a.75.75 0 0 0-.515-.234H13.5c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5zm2.297-12.656c.422.422.703 1.031.703 1.594V27c0 1.688-1.36 3-3 3h-7.5c-1.687 0-3-1.312-3-3V15c0-1.64 1.313-3 3-3h5.063c.562 0 1.171.234 1.593.656z' />
    </g>
    <defs>
      <clipPath id='26f24d9714479812174baac604fba33b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteXlRegularIcon);
export default ForwardRef;
