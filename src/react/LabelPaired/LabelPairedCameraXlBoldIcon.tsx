import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraXlBoldIcon = (
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
      <path d='M9.328 7.5h5.297c1.172 0 2.156.75 2.531 1.828l.375 1.172H21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-12c0-1.64 1.313-3 3-3h3.422l.422-1.172 1.031.328-1.031-.328C7.172 8.25 8.204 7.5 9.328 7.5m-.375 2.531L8.297 12c-.14.469-.563.75-1.078.75H3c-.422 0-.75.375-.75.75v12c0 .422.328.75.75.75h18c.375 0 .75-.328.75-.75v-12c0-.375-.375-.75-.75-.75h-4.266c-.515 0-.937-.281-1.078-.75L15 10.031a.41.41 0 0 0-.375-.281H9.328a.41.41 0 0 0-.375.281M12 24.75c-1.922 0-3.61-.984-4.547-2.625-.984-1.594-.984-3.61 0-5.25.938-1.594 2.625-2.625 4.547-2.625 1.875 0 3.563 1.031 4.5 2.625.984 1.64.984 3.656 0 5.25-.937 1.64-2.625 2.625-4.5 2.625M9 19.5c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625 0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0-.937.562-1.5 1.547-1.5 2.578' />
    </g>
    <defs>
      <clipPath id='73f65e13918f9dd2e088ae8ace5abe8c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraXlBoldIcon);
export default ForwardRef;
