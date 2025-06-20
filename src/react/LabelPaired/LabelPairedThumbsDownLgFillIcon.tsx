import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.227 24.25c-1.016.195-1.993-.469-2.227-1.484l-.078-.47c-.235-1.288-.977-2.46-1.992-3.28l-.274-.235c-.898-.703-1.406-1.758-1.406-2.93v-4.335c0-1.25.625-2.422 1.64-3.125l1.524-.977a3.63 3.63 0 0 1 2.07-.664h3.829c1.015 0 1.874.86 1.874 1.875 0 .156-.039.313-.078.43a1.84 1.84 0 0 1 1.328 1.758c0 .39-.117.703-.273.976.86.195 1.523.938 1.523 1.836 0 .625-.273 1.133-.703 1.484.586.313 1.016.938 1.016 1.641 0 1.055-.86 1.875-1.875 1.875H12.5c.508.938.898 1.914 1.094 2.969l.117.43c.195 1.015-.469 1.992-1.484 2.226M1.25 20.5C.547 20.5 0 19.953 0 19.25V10.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25v8.75c0 .703-.586 1.25-1.25 1.25z' />
    </g>
    <defs>
      <clipPath id='3d504a0c74f98be04fee8d63ce2da118__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownLgFillIcon);
export default ForwardRef;
