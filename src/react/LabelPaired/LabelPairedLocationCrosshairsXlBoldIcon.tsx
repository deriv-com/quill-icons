import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsXlBoldIcon = (
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
      <path d='M12 6c.61 0 1.125.516 1.125 1.125v1.969c4.031.515 7.266 3.75 7.781 7.781h1.969c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-1.969c-.515 4.078-3.75 7.313-7.781 7.828v1.922A1.11 1.11 0 0 1 12 30c-.656 0-1.125-.469-1.125-1.125v-1.922a9.05 9.05 0 0 1-7.828-7.828H1.125C.469 19.125 0 18.656 0 18c0-.61.469-1.125 1.125-1.125h1.922c.515-4.031 3.75-7.266 7.828-7.781V7.125C10.875 6.515 11.344 6 12 6M5.25 18a6.71 6.71 0 0 0 3.375 5.86c2.063 1.218 4.64 1.218 6.75 0 2.063-1.22 3.375-3.422 3.375-5.86 0-2.39-1.312-4.594-3.375-5.812-2.11-1.22-4.687-1.22-6.75 0A6.7 6.7 0 0 0 5.25 18m9 0c0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C10.172 16.5 9.75 17.203 9.75 18c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969M7.5 18c0-1.594.844-3.047 2.25-3.89 1.36-.797 3.094-.797 4.5 0 1.36.843 2.25 2.296 2.25 3.89 0 1.64-.89 3.094-2.25 3.938-1.406.796-3.14.796-4.5 0C8.344 21.094 7.5 19.64 7.5 18' />
    </g>
    <defs>
      <clipPath id='8da9517c98c4d45d8afcac198a3dc39b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsXlBoldIcon);
export default ForwardRef;
