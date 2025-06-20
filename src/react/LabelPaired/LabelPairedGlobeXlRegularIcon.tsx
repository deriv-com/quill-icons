import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeXlRegularIcon = (
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
      <path d='M12 28.5c.75 0 1.875-.656 2.86-2.672.468-.937.89-2.062 1.171-3.328H7.97c.234 1.266.656 2.39 1.125 3.328.984 2.016 2.11 2.672 2.906 2.672M7.688 21h8.578c.14-.937.234-1.922.234-3 0-1.031-.094-2.016-.234-3H7.688c-.141.984-.188 1.969-.188 3 0 1.078.047 2.063.188 3m.28-7.5h8.063a14 14 0 0 0-1.172-3.281C13.875 8.203 12.75 7.5 12 7.5c-.797 0-1.922.703-2.906 2.719-.469.937-.89 2.015-1.125 3.281m9.845 1.5c.093.984.187 1.969.187 3 0 1.078-.094 2.063-.187 3h4.218c.282-.937.469-1.922.469-3 0-1.031-.187-2.016-.469-3zm3.656-1.5a10.66 10.66 0 0 0-6.14-5.437c.983 1.312 1.78 3.234 2.202 5.437zm-15.047 0c.469-2.203 1.219-4.125 2.203-5.437a10.66 10.66 0 0 0-6.14 5.437zm-4.5 1.5a10.8 10.8 0 0 0-.422 3c0 1.078.14 2.063.422 3h4.266C6.047 20.063 6 19.078 6 18c0-1.031.047-2.016.188-3zm13.406 12.984a10.58 10.58 0 0 0 6.14-5.484h-3.937c-.422 2.25-1.218 4.125-2.203 5.484m-6.703 0c-.984-1.359-1.734-3.234-2.203-5.484H2.484a10.58 10.58 0 0 0 6.141 5.484M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30' />
    </g>
    <defs>
      <clipPath id='c50be4395f8c57b6eb76d4a02d68c7bc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeXlRegularIcon);
export default ForwardRef;
