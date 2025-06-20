import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreXlIcon = (
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
      <path d='m11.953 11.672-.375-.703c-.281-.469-.89-.61-1.312-.375a.99.99 0 0 0-.375 1.312l.984 1.688-3.14 5.437H5.296a.94.94 0 0 0-.938.938.94.94 0 0 0 .938.937h8.719c.422-.75-.141-1.875-1.078-1.875h-3l4.124-7.125c.282-.469.094-1.031-.374-1.312-.422-.235-1.032-.094-1.266.375zM8.297 21.89c-.516-.563-1.125-.75-1.922-.516l-.656 1.172a.934.934 0 0 0 .328 1.312c.469.235 1.078.094 1.312-.375zm7.922-2.86c-1.266-2.203-2.203-3.797-2.813-4.875-.61.469-1.172 1.828-.375 3.235.797 1.359 1.969 3.375 3.563 6.093.234.47.843.61 1.312.375.422-.28.61-.843.328-1.312l-.937-1.64h1.406a.94.94 0 0 0 .938-.938.94.94 0 0 0-.938-.938zM12 6.375c6.422 0 11.625 5.203 11.625 11.625S18.422 29.625 12 29.625.375 24.422.375 18 5.578 6.375 12 6.375M22.125 18c0-5.578-4.594-10.125-10.125-10.125C6.375 7.875 1.875 12.469 1.875 18A10.113 10.113 0 0 0 12 28.125c5.578 0 10.125-4.547 10.125-10.125' />
    </g>
    <defs>
      <clipPath id='4d3b75feee23448324b98f9f47a280b6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreXlIcon);
export default ForwardRef;
