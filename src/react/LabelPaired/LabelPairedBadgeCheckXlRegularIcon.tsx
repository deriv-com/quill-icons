import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckXlRegularIcon = (
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
      <path d='M8.906 9.375c-.187.328-.515.469-.89.375a3.44 3.44 0 0 0-3.47.844 3.44 3.44 0 0 0-.843 3.469c.094.374-.047.703-.375.89C2.203 15.516 1.5 16.688 1.5 18c0 1.36.703 2.484 1.828 3.094.328.187.469.515.375.89a3.44 3.44 0 0 0 .844 3.47 3.44 3.44 0 0 0 3.469.843c.375-.094.75.047.89.375.61 1.125 1.735 1.828 3.094 1.828 1.313 0 2.484-.703 3.047-1.828a.785.785 0 0 1 .89-.375 3.44 3.44 0 0 0 3.47-.844 3.44 3.44 0 0 0 .843-3.469c-.094-.375.047-.75.375-.89C21.75 20.484 22.5 19.359 22.5 18a3.41 3.41 0 0 0-1.875-3.047.785.785 0 0 1-.375-.89 3.44 3.44 0 0 0-.844-3.47 3.44 3.44 0 0 0-3.468-.843c-.376.094-.704-.047-.891-.375A3.41 3.41 0 0 0 12 7.5c-1.36 0-2.484.75-3.094 1.875M12 6c1.688 0 3.188.89 4.078 2.156 1.547-.281 3.188.188 4.406 1.36 1.172 1.218 1.641 2.859 1.36 4.406C23.109 14.812 24 16.312 24 18c0 1.734-.89 3.188-2.156 4.125a4.92 4.92 0 0 1-1.36 4.36c-1.218 1.218-2.859 1.687-4.406 1.406A5 5 0 0 1 12 30c-1.734 0-3.187-.844-4.125-2.11a4.82 4.82 0 0 1-4.36-1.406 4.82 4.82 0 0 1-1.406-4.359C.844 21.188 0 19.735 0 18c0-1.687.844-3.187 2.11-4.078-.282-1.547.187-3.188 1.406-4.406a4.92 4.92 0 0 1 4.359-1.36C8.813 6.891 10.265 6 12 6m5.016 9.563-6 6c-.282.28-.797.28-1.078 0l-3-3c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L10.5 19.97l5.438-5.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079' />
    </g>
    <defs>
      <clipPath id='91cb629cb83f88bcaece6c7c309772de__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckXlRegularIcon);
export default ForwardRef;
