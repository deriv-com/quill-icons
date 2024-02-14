import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramXlIcon = (
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
      <path d='M12 6.375q3.235.047 5.86 1.594a11.6 11.6 0 0 1 4.171 4.172Q23.58 14.766 23.625 18q-.046 3.234-1.594 5.86a11.6 11.6 0 0 1-4.172 4.171Q15.234 29.58 12 29.625q-3.235-.046-5.86-1.594A11.6 11.6 0 0 1 1.97 23.86Q.422 21.234.375 18q.047-3.235 1.594-5.86A11.6 11.6 0 0 1 6.14 7.97Q8.766 6.42 12 6.375m5.39 7.922v-.469a.7.7 0 0 0-.187-.328.9.9 0 0 0-.469-.14q-.233 0-1.125.328-.844.28-3.187 1.265-1.687.704-6.797 2.906-.796.33-.844.657 0 .468.985.703.14 0 .28.047.423.187.938.28.516.142.844.142.563.046 1.266-.422 4.734-3.235 4.922-3.282.093-.046.234.047.094.141.047.188-.094.234-1.031 1.078a71 71 0 0 1-1.641 1.594q-.468.375-.516.468l-.28.282q-.469.375-.563.75-.141.328.562.843.703.422 1.266.797.562.422 1.36.938l.374.281q.703.563 1.453.563.516.046.797-1.172.187-1.08.469-2.672.282-1.595.515-3.14a58 58 0 0 0 .329-2.532' />
    </g>
    <defs>
      <clipPath id='dfe37498d5f86516b9b07f21e0bf0e9f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramXlIcon);
export default ForwardRef;
