use stylist::Style;

pub mod json;


pub trait StyledComponent {
    fn style(&self) -> Style;
}