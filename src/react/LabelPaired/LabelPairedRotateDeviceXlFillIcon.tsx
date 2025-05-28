import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceXlFillIcon = (
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
      <path d='M19.875 18.656c.89.89.89 2.297 0 3.188l-4.219 4.265a2.323 2.323 0 0 1-3.187 0l-8.485-8.484a2.235 2.235 0 0 1 0-3.187l4.22-4.266a2.323 2.323 0 0 1 3.187 0zm-11.016-6.75c.422.375.422 1.031 0 1.453l-1.687 1.688a1.047 1.047 0 0 1-1.5 0l-.094-.094-.562.516c-.282.328-.282.797 0 1.078L13.5 25.03c.328.282.797.282 1.078 0l4.266-4.218c.281-.329.281-.797 0-1.079l-8.485-8.484c-.328-.281-.796-.281-1.078 0l-.515.516zm10.5-.937a7 7 0 0 0-1.125-.938l-.375-.281a8.3 8.3 0 0 0-1.453-.703l-.468-.14c-.141-.048-.235-.095-.376-.095l1.126 1.079-1.079 1.078-3.89-3.938h2.344c.562.047 1.124.14 1.64.235l.656.187.563.188c.61.234 1.172.515 1.734.843l.469.329c.422.28.89.656 1.266 1.078a9.7 9.7 0 0 1 2.859 6.89h-1.5c0-2.11-.797-4.218-2.39-5.812M4.641 25.64c.375.328.75.656 1.125.937l.375.235c.468.28.937.515 1.453.703l.515.187c.094.047.235.047.329.094l-1.079-1.078 1.079-1.078 3.843 3.937H10.5l-.562-.047c-.563 0-1.079-.093-1.641-.234l-.61-.14-.609-.235a7 7 0 0 1-1.687-.797l-.47-.328c-.468-.328-.89-.703-1.312-1.078a9.7 9.7 0 0 1-2.859-6.89h1.5c0 2.108.797 4.218 2.438 5.812z' />
    </g>
    <defs>
      <clipPath id='ac9d8837fa7a165e46fee5473454fdae__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceXlFillIcon);
export default ForwardRef;
