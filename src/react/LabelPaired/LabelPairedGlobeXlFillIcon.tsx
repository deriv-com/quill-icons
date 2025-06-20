import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeXlFillIcon = (
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
      <path d='M16.5 18c0 1.078-.094 2.063-.187 3H7.64a30 30 0 0 1-.141-3c0-1.031.047-2.016.14-3h8.673c.093.984.187 1.969.187 3m1.313-3h5.765c.281.984.422 1.969.422 3 0 1.078-.14 2.063-.422 3h-5.765c.093-.937.187-1.969.187-3s-.094-2.016-.187-3m5.296-1.5h-5.484c-.469-2.953-1.406-5.484-2.578-7.078 3.656.984 6.656 3.61 8.062 7.078m-6.984 0H7.828a19.7 19.7 0 0 1 1.266-4.406c.515-1.125 1.031-1.922 1.594-2.438C11.203 6.188 11.625 6 12 6c.328 0 .75.188 1.266.656.562.516 1.078 1.313 1.593 2.438a19.7 19.7 0 0 1 1.266 4.406m-9.797 0H.844C2.25 10.031 5.25 7.406 8.906 6.422c-1.172 1.594-2.11 4.125-2.578 7.078M.375 15h5.766A31 31 0 0 0 6 18c0 1.031.047 2.063.14 3H.376C.094 20.063 0 19.078 0 18c0-1.031.094-2.016.375-3m8.719 11.953A19.5 19.5 0 0 1 7.828 22.5h8.297a19.5 19.5 0 0 1-1.266 4.453c-.515 1.125-1.03 1.922-1.593 2.438-.516.468-.938.609-1.266.609-.375 0-.797-.14-1.312-.61-.563-.515-1.079-1.312-1.594-2.437M6.328 22.5c.469 3 1.406 5.531 2.578 7.125C5.25 28.641 2.25 26.015.844 22.5zm16.781 0c-1.406 3.516-4.406 6.14-8.062 7.125 1.219-1.594 2.11-4.125 2.578-7.125z' />
    </g>
    <defs>
      <clipPath id='624a13bd09e21ff614b2f151d9eb76d5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeXlFillIcon);
export default ForwardRef;
